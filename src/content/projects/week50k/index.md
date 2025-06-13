---
title: "Week 50K - Running Challenge Platform"
description: "Personal project built with Nuxt.js integrating Strava API to track and showcase running achievements, deployed on Heroku."
date: 2019-06-01
demoURL: "https://week50k.herokuapp.com"
repoURL: "https://github.com/SamuelLin/week50k"
tags: ["nuxt", "strava-api", "vue", "heroku", "fitness"]
---

# Week 50K - Running Challenge Platform

A personal project that demonstrates full-stack development skills by creating a running challenge platform that integrates with Strava API to track and showcase running achievements.

## Project Concept

Week 50K is a fitness tracking application that challenges users to run 50 kilometers per week. The platform connects with Strava to automatically track running activities and provides visual progress tracking and achievement sharing.

## Technical Implementation

### Frontend Architecture (Nuxt.js)
```javascript
// Nuxt.js configuration
export default {
  mode: 'universal',
  
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  
  auth: {
    strategies: {
      strava: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://www.strava.com/oauth/authorize',
        access_token_endpoint: 'https://www.strava.com/oauth/token',
        userinfo_endpoint: 'https://www.strava.com/api/v3/athlete',
        scope: ['read', 'activity:read']
      }
    }
  }
}
```

### Strava API Integration
```javascript
// Activity fetching service
class StravaService {
  constructor(accessToken) {
    this.accessToken = accessToken
    this.baseURL = 'https://www.strava.com/api/v3'
  }
  
  async getActivities(after, before) {
    const response = await fetch(`${this.baseURL}/activities`, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`
      },
      params: {
        after: Math.floor(after.getTime() / 1000),
        before: Math.floor(before.getTime() / 1000),
        per_page: 200
      }
    })
    
    return response.json()
  }
  
  async getWeeklyDistance(startDate) {
    const endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 7)
    
    const activities = await this.getActivities(startDate, endDate)
    const runningActivities = activities.filter(activity => 
      activity.type === 'Run'
    )
    
    return runningActivities.reduce((total, activity) => 
      total + (activity.distance / 1000), 0
    )
  }
}
```

## Core Features

### 1. Strava OAuth Integration
**Authentication Flow**:
- Secure OAuth 2.0 implementation with Strava
- User authorization for activity data access
- Token management and refresh handling
- Privacy-conscious data handling

### 2. Weekly Challenge Tracking
```vue
<template>
  <div class="challenge-dashboard">
    <WeeklyProgress 
      :distance="currentWeekDistance"
      :target="50"
      :activities="weekActivities"
    />
    
    <WeeklyCalendar 
      :activities="weekActivities"
      @date-select="fetchActivitiesForDate"
    />
    
    <AchievementBadges 
      :achievements="userAchievements"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $auth, $axios }) {
    if (!$auth.loggedIn) return {}
    
    const weekStart = getWeekStart(new Date())
    const activities = await $axios.get('/api/activities', {
      params: { after: weekStart }
    })
    
    return {
      weekActivities: activities.data,
      currentWeekDistance: calculateTotalDistance(activities.data)
    }
  }
}
</script>
```

### 3. Progress Visualization
**Dashboard Components**:
- **Weekly Progress Bar** - Visual representation of 50K goal
- **Activity Calendar** - Heat map of running activities
- **Statistics Cards** - Distance, pace, and achievement metrics
- **Trend Charts** - Weekly and monthly progress trends

### 4. Achievement System
```javascript
// Achievement calculation logic
const achievements = {
  'week50k': {
    name: 'Week 50K Champion',
    condition: (weekDistance) => weekDistance >= 50,
    badge: 'trophy-gold'
  },
  'consistency': {
    name: 'Consistency Master',
    condition: (activities) => activities.length >= 5,
    badge: 'medal-silver'
  },
  'early-bird': {
    name: 'Early Bird',
    condition: (activities) => activities.some(a => 
      new Date(a.start_date).getHours() < 7
    ),
    badge: 'sunrise'
  }
}

function calculateAchievements(activities, weekDistance) {
  return Object.entries(achievements)
    .filter(([key, achievement]) => 
      achievement.condition(activities, weekDistance)
    )
    .map(([key, achievement]) => ({
      id: key,
      ...achievement,
      earnedDate: new Date()
    }))
}
```

## Data Processing & Analytics

### Activity Data Processing
```javascript
// Data transformation for visualizations
function processWeeklyData(activities) {
  const weeklyStats = activities.reduce((acc, activity) => {
    const date = new Date(activity.start_date).toISOString().split('T')[0]
    
    if (!acc[date]) {
      acc[date] = {
        distance: 0,
        duration: 0,
        activities: []
      }
    }
    
    acc[date].distance += activity.distance / 1000
    acc[date].duration += activity.moving_time
    acc[date].activities.push(activity)
    
    return acc
  }, {})
  
  return weeklyStats
}
```

### Performance Metrics
- **Weekly Distance Tracking** - Automatic calculation from Strava data
- **Pace Analysis** - Average pace trends and improvements
- **Consistency Metrics** - Running frequency and streak tracking
- **Goal Achievement** - Progress toward 50K weekly target

## Deployment & DevOps

### Heroku Deployment
```json
{
  "name": "week50k",
  "scripts": {
    "build": "nuxt build",
    "start": "nuxt start"
  },
  "engines": {
    "node": "14.x"
  },
  "buildpacks": [
    "heroku/nodejs"
  ]
}
```

### Environment Configuration
```javascript
// Production configuration
export default {
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  
  env: {
    STRAVA_CLIENT_ID: process.env.STRAVA_CLIENT_ID,
    STRAVA_CLIENT_SECRET: process.env.STRAVA_CLIENT_SECRET,
    BASE_URL: process.env.BASE_URL || 'https://week50k.herokuapp.com'
  }
}
```

## User Experience Design

### Responsive Interface
```css
/* Mobile-first responsive design */
.challenge-dashboard {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .challenge-dashboard {
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
}

.progress-circle {
  width: 200px;
  height: 200px;
  background: conic-gradient(
    from 0deg,
    #4ade80 0deg,
    #4ade80 var(--progress-angle),
    #e5e5e5 var(--progress-angle),
    #e5e5e5 360deg
  );
}
```

### Interactive Elements
- **Smooth Animations** - CSS transitions for progress updates
- **Hover Effects** - Interactive activity calendar
- **Loading States** - Skeleton screens during data fetching
- **Error Handling** - Graceful error messages and retry options

## Project Outcomes

### Technical Achievements
- **Successful API Integration** - Reliable Strava data synchronization
- **Real-time Updates** - Automatic activity tracking and progress updates
- **Responsive Design** - Seamless experience across all devices
- **Production Deployment** - Live application on Heroku platform

### Personal Learning
- **OAuth Implementation** - Hands-on experience with OAuth 2.0 flow
- **API Design** - RESTful API consumption and data transformation
- **Nuxt.js Mastery** - Server-side rendering and universal applications
- **Deployment Experience** - Production deployment and environment management

### Community Impact
- **Open Source** - Published code for other developers to learn from
- **Fitness Motivation** - Tool for personal and community fitness goals
- **Technical Portfolio** - Demonstration of full-stack development skills

This personal project showcases the ability to integrate third-party APIs, create engaging user experiences, and deploy production-ready applications while pursuing personal fitness goals.