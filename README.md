# Mini Instagram Backend (TDD Approach)

## Feature 1: Get Posts API

### Step 1: Write Failing Test

- Created test for GET /api/posts/
- Test expected status 200
- Test failed initially

### Step 2: Implement API

- Created `get_posts` view
- Added URL route
- Returned dummy JSON response

### Result

- Test passed successfully

---

## Tech Stack

- Django
- Django REST Framework
- Pytest

---

## Run Project

```bash
python manage.py runserver
pytest
```

---

## API Endpoints

### 1. Get Posts

### Response

```json
{
  "message": "Hello, Instagram API!"
}
```
