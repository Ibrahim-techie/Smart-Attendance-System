# Smart-Attendance-System


A full-stack web-based attendance management solution for colleges and schools. Combines secure student registration, real-time face recognition, geofencing verification, and teacher-generated attendance codes to ensure accuracy and prevent proxy attendance.

## 🚀 Features

### 👨‍🏫 Teacher
- Generate attendance codes with GPS location and 10-minute expiry
- Codes stored in MongoDB with TTL

### 👨‍🎓 Student
- Register with name, email, college ID, password and face capture
- Face descriptor stored securely in MongoDB
- Mark attendance by:
  - Entering valid teacher code
  - Geolocation verification (within 100m)
  - Face recognition comparison (Euclidean distance)

### ⚙️ Backend (Node.js + Express + MongoDB)
- Teacher and Student backend separation
- Routes for register, code generation, attendance marking
- Uses face-api.js for facial landmarking and descriptor extraction

### 📸 Face Recognition
- face-api.js with SSD Mobilenet or TinyFaceDetector
- Face descriptor stored at registration and compared during attendance marking

### 🧠 Geofencing
- Distance calculation between student and teacher using Haversine formula
- Rejects students outside the allowed range

## 🗂️ Folder Structure
```
attendance/
├── admin/                        # Admin dashboard (optional)
├── merged-smart-attendance-backend/ # Combined logic # Code generation APIs and  # Student APIs
├── student/                     # Student frontend 
│   ├── dashboard/              # Student UI (register, mark attendance)
│   ├── register/               # Face registration
│   └── login/ 
├── teacherupdate/              # Teacher frontend 
│   |── dashboard/   ```
|   |──login/

## 🛠️ Tech Stack
- Frontend: HTML, CSS, JS, Tailwind
- Face Detection: face-api.js (SSD Mobilenet / TinyFaceDetector)
- Backend: Node.js, Express
- Database: MongoDB Atlas

## 📦 Setup
1. Clone the repo:
```bash
git clone https://github.com/ibrahim-techie/Smart-Attendance-System.git
```
2. Install dependencies in both backends:
```bash
cd student/smart-attendance-backend
npm install

cd teacherupdate/smart-attendance-backend
npm install
```
3. Add .env file in each backend:
```
MONGO_URI=your_mongodb_uri
```
4. Start servers:
```bash
node server.js
```
5. Open the frontends via Live Server:
```
student/dashboard/mark attendance/mark_attendace.html
teacherupdate/dashboard/generateCode/generateCode.html
```

## 📸 Screenshots
- Registration with face capture
- Attendance verification
- Green status on success, Red on failure

## ✅ Future Improvements
- Migrate to FaceNet or backend-based face comparison
- Improve geolocation accuracy
- Add admin dashboard
- Export attendance logs

## 📄 License
MIT License-

---
Built by [@ibrahim-techie](https://github.com/ibrahim-techie) and [@Murtaza-stovewala](https://github.com/Murtaza-stovewala) with ❤️ for hackathons and real-world attendance automation.

