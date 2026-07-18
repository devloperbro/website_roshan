# AGENT.md

## Project Goal
Update the logistics website with the following features.

---

## 1. Journey Page
- Remove all timeline entries before 2025.
- Timeline starts at 2025.
- Website should appear as a 1-year-old company.
- Keep design unchanged.

---

## 2. Authentication

### Login
Fields:
- Email
- Password

Validation:
- Email required
- Valid email format
- Password required
- Minimum 8 characters

---

### Signup
Fields:
- Full Name
- Email
- Password
- Confirm Password

Validation:
- Full Name required
- Minimum 3 characters
- Email required
- Valid email
- Password minimum 8 characters
- At least:
  - 1 uppercase
  - 1 lowercase
  - 1 number
  - 1 special character
- Confirm Password must match Password

Show inline validation errors.

---

## 3. User Accounts

Each user has:

```
id
full_name
email
password_hash
created_at
```

Passwords must never be stored in plain text.

---

## 4. Shipment Tracking

Authenticated users can:

- Save shipments
- View shipment history
- Track shipment status

Shipment Model

```
shipment_id
user_id
tracking_number
origin
destination
status
latitude
longitude
created_at
updated_at
```

Only owner can view their shipments.

---

## 5. Live Tracking

Display:

- Current location
- Status
- Estimated delivery

Use map marker for shipment.

If live GPS unavailable:
- simulate using stored coordinates.

---

## 6. Service Locations

Interactive India map.

Pins for:

- Delhi
- Noida
- Gurugram
- Lucknow
- Jaipur
- Bhopal
- Mumbai
- Pune
- Bengaluru
- Hyderabad
- Chennai
- Kolkata
- Ahmedabad

Clicking a pin opens:

```
City
Services
Contact
Working Hours
```

Use Leaflet or Google Maps.

---

## 7. Supabase Integration

Use:

Authentication

Database

Storage (optional)

Tables:

users

shipments

tracking_logs

Example schema

users

```
id uuid
full_name text
email text unique
created_at timestamp
```

shipments

```
id uuid
user_id uuid
tracking_number text
origin text
destination text
status text
latitude double precision
longitude double precision
created_at timestamp
```

tracking_logs

```
id uuid
shipment_id uuid
latitude double precision
longitude double precision
status text
created_at timestamp
```

---

## 8. Environment Variables

Expect:

```
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

Do not hardcode secrets.

---

## 9. Required Packages

Frontend

- @supabase/supabase-js
- react-router-dom
- react-hook-form
- zod
- leaflet
- react-leaflet

---

## 10. Code Rules

- Reuse components.
- Type-safe.
- No duplicated code.
- Responsive.
- Clean UI.
- Production-ready.

---

## 11. Before Finishing

Verify:

✓ Authentication works

✓ Validation works

✓ Journey starts at 2025

✓ Shipments save correctly

✓ Tracking works

✓ Map loads

✓ Pins clickable

✓ Mobile responsive

✓ No console errors

---

## 12. Supabase Connection

Need from user:

- Project URL
- Anon Key

After receiving:

1. Create `supabaseClient`
2. Connect auth
3. Connect database
4. Test CRUD
5. Verify tracking storage
6. Enable Row Level Security
7. Create policies

Stop and ask if credentials are missing.