---
title: "Settour Website Rebuild"
description: "Complete website rebuild for Taiwan's leading travel agency using React, Redux, and GraphQL, featuring comprehensive booking functionality for flights, hotels, and travel packages."
date: 2018-01-01
tags: ["react", "redux", "graphql", "travel", "booking"]
---

# Settour Website Rebuild

Led the complete rebuild of Settour's website, transforming the legacy travel booking platform into a modern, React-based application with enhanced user experience and comprehensive booking capabilities.

## Project Background

Settour, one of Taiwan's premier travel agencies, needed a modern web platform to compete in the digital travel market. The legacy system was outdated, slow, and couldn't provide the seamless booking experience customers expected.

## Technical Architecture

### Frontend Framework
```javascript
// React + Redux architecture
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  flights: flightReducer,
  hotels: hotelReducer,
  packages: packageReducer,
  user: userReducer,
  booking: bookingReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)
```

### Component-Driven Development
```javascript
// Storybook component documentation
import { storiesOf } from '@storybook/react'
import BookingCard from './BookingCard'

storiesOf('BookingCard', module)
  .add('Flight Booking', () => (
    <BookingCard
      type="flight"
      departure="TPE"
      arrival="NRT"
      date="2018-06-15"
      price={25000}
    />
  ))
  .add('Hotel Booking', () => (
    <BookingCard
      type="hotel"
      name="Tokyo Hilton"
      rating={5}
      checkIn="2018-06-15"
      checkOut="2018-06-18"
      price={8000}
    />
  ))
```

## Core Features Development

### 1. Flight Booking System
**Objective**: Comprehensive flight search and booking platform

#### Search Functionality
- **Multi-city Search** - Complex itinerary planning
- **Flexible Dates** - Price comparison across date ranges
- **Airline Filtering** - Filter by preferred airlines and alliances
- **Price Alerts** - Notifications for price changes

#### Booking Flow
```javascript
// Flight booking state management
const flightBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_FLIGHTS_REQUEST':
      return { ...state, loading: true, error: null }
    
    case 'SEARCH_FLIGHTS_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        results: action.payload,
        searchId: action.searchId
      }
    
    case 'SELECT_OUTBOUND_FLIGHT':
      return { 
        ...state, 
        selectedOutbound: action.payload,
        step: 'select_return'
      }
    
    case 'COMPLETE_BOOKING':
      return { 
        ...state, 
        booking: action.payload,
        step: 'confirmation'
      }
    
    default:
      return state
  }
}
```

### 2. Hotel Reservation Platform
**Features**: Comprehensive accommodation booking system

#### Hotel Search
- **Location-based Search** - Map integration and area filtering
- **Amenity Filtering** - Pool, gym, WiFi, parking options
- **Review Integration** - Customer ratings and reviews
- **Photo Galleries** - High-quality hotel imagery

#### Room Selection
- **Real-time Availability** - Live inventory updates
- **Room Comparison** - Side-by-side room feature comparison
- **Package Deals** - Hotel + flight combinations
- **Cancellation Policies** - Clear terms and conditions

### 3. Travel Package System
**Goal**: Complete travel package booking and customization

#### Package Components
- **Pre-built Packages** - Curated travel experiences
- **Custom Packages** - Build-your-own itinerary
- **Group Bookings** - Special pricing for groups
- **Seasonal Offers** - Holiday and seasonal packages

## GraphQL Integration

### API Layer Design
```graphql
# Travel booking schema
type Query {
  searchFlights(
    origin: String!
    destination: String!
    departureDate: String!
    returnDate: String
    passengers: Int!
  ): FlightSearchResult
  
  searchHotels(
    destination: String!
    checkIn: String!
    checkOut: String!
    guests: Int!
  ): HotelSearchResult
  
  getPackages(
    destination: String
    duration: Int
    budget: PriceRange
  ): [TravelPackage]
}

type Mutation {
  createBooking(input: BookingInput!): BookingResult
  cancelBooking(bookingId: ID!): CancellationResult
}
```

### Data Fetching Optimization
```javascript
// Apollo Client integration
import { useQuery, useMutation } from '@apollo/client'

const FlightSearch = ({ searchParams }) => {
  const { data, loading, error } = useQuery(SEARCH_FLIGHTS, {
    variables: searchParams,
    fetchPolicy: 'cache-and-network'
  })
  
  const [bookFlight] = useMutation(BOOK_FLIGHT, {
    onCompleted: (data) => {
      router.push(`/booking/confirmation/${data.bookFlight.id}`)
    }
  })
  
  return (
    <FlightResults 
      flights={data?.searchFlights} 
      onBook={bookFlight}
      loading={loading}
    />
  )
}
```

## Testing Strategy

### Unit Testing with Jest
```javascript
// Component testing
import { render, fireEvent, waitFor } from '@testing-library/react'
import BookingForm from './BookingForm'

describe('BookingForm', () => {
  test('submits booking with valid data', async () => {
    const mockSubmit = jest.fn()
    const { getByLabelText, getByText } = render(
      <BookingForm onSubmit={mockSubmit} />
    )
    
    fireEvent.change(getByLabelText('Passenger Name'), {
      target: { value: 'John Doe' }
    })
    
    fireEvent.click(getByText('Book Now'))
    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        passengerName: 'John Doe'
      })
    })
  })
})
```

### Integration Testing
- **API Integration** - End-to-end booking flow testing
- **Payment Gateway** - Secure payment processing validation
- **Cross-browser Testing** - Compatibility across major browsers
- **Mobile Responsiveness** - Touch interface and responsive design

## User Experience Enhancements

### Responsive Design
```css
/* Mobile-first responsive design */
.booking-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 768px) {
  .booking-card {
    flex-direction: row;
    align-items: center;
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .booking-card {
    padding: 2rem;
    gap: 2rem;
  }
}
```

### Performance Optimization
- **Code Splitting** - Route-based code splitting for faster loading
- **Image Optimization** - Lazy loading and responsive images
- **Caching Strategy** - Intelligent caching for search results
- **Bundle Analysis** - Regular bundle size monitoring

## Cross-departmental Collaboration

### UI/UX Team Collaboration
- **Design System Implementation** - Consistent component library
- **User Research Integration** - Data-driven design decisions
- **Accessibility Standards** - WCAG compliance implementation
- **Usability Testing** - Iterative improvement based on user feedback

### Backend Team Coordination
- **API Design** - Collaborated on GraphQL schema design
- **Performance Requirements** - Defined SLA requirements
- **Error Handling** - Comprehensive error state management
- **Data Validation** - Frontend and backend validation alignment

## Project Results

### Performance Metrics
- **40% faster page load times** compared to legacy system
- **60% reduction in bounce rate** on booking pages
- **25% increase in conversion rate** for completed bookings
- **95% mobile compatibility** across all devices

### Business Impact
- **Enhanced user experience** leading to higher customer satisfaction
- **Increased mobile bookings** by 45%
- **Reduced support inquiries** by 30% due to improved UX
- **Modern platform** positioning Settour competitively in the market

### Technical Achievements
- **Scalable architecture** supporting future feature additions
- **Comprehensive testing** with 90% code coverage
- **Component library** enabling rapid feature development
- **GraphQL implementation** improving data fetching efficiency

This project established modern development practices at Settour and demonstrated the value of React, Redux, and GraphQL in building complex travel booking platforms.