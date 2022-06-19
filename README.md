# Engineer Project - planning holiday app 

## Authors: 
- Jakub Brambor - Front-End Developer
- Radosław Łuczak - Back-End Developer
- Krzysztof Wieczorek - UX/UI Designer


## API Endpoints
testing on:
- locale: en-gb
- hotel_id: 1676161

### POST Register
```js
http://localhost:8000/auth/register****
```

### POST Login
```js
http://localhost:8000/auth/login****
```

### POST Logout
```js
http://localhost:8000/auth/logout****
```

```js
body: {
  email: string,
  password: string,
}

```

----------------------------------------------------------------

### GET facilities
```js
http://localhost:8000/hotels/facilities/:locale/:hotel_id****
```

### GET hotel data
```js
http://localhost:8000/hotels/data/:locale/:hotel_id****
```

### GET hotel photos
```js
http://localhost:8000/hotels/photos/:locale/:hotel_id****
```

### GET hotel review scores
```js
http://localhost:8000/hotels/review-scores/:locale/:hotel_id****
```

### GET hotel locations
```js
http://localhost:8000/hotels/locations/:locale/:city_name****
```

### GET hotel payments-features
```js
http://localhost:8000/hotels/payment-features/:locale/:hotel_id****
```

### GET hotel description
```js
http://localhost:8000/hotels/description/:locale/:hotel_id****
```

### GET hotel questions
```js
http://localhost:8000/hotels/questions/:locale/:hotel_id****
```

### GET hotel location highlights
```js
http://localhost:8000/hotels/location-highlights/:locale/:hotel_id****
```

### GET hotel nerbay places
```js
http://localhost:8000/hotels/nearby-places/:locale/:hotel_id****
```

### GET hotel search
```js
http://localhost:8000/hotels/search/:locale/:checkout_date/:checkin_date/:dest_id/:adults_number/:room_number****
```
