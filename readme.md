### 📝 **Task Submission Content: Productivity Tracker Chrome Extension Backend**

#### **🔷 Task Title**

**Develop a Chrome Extension Productivity Tracker with MERN Stack**

---

#### **🔷 Objective**

To build a **backend using the MERN stack** that:

* Tracks time spent on different websites
* Stores data in MongoDB
* Provides APIs to fetch productivity reports

---

#### **🔷 Tools & Technologies Used**

✅ **MongoDB Atlas** – Database to store user time logs
✅ **Express.js** – Backend framework to handle APIs
✅ **Mongoose** – ODM to connect Node.js to MongoDB
✅ **Thunder Client** – For testing API requests inside VS Code
✅ **Node.js** – JavaScript runtime for backend

---

#### **🔷 Implementation Steps**

1. **Created server.js**

   * Set up Express server
   * Connected to MongoDB Atlas using Mongoose

2. **Created TimeLog model**

   * Fields: `website` (String), `timeSpent` (Number)

3. **Created API routes**

   * **POST /api/timelog** to save website usage data
   * **GET /api/timelog** to retrieve all usage data for daily reports

4. **Tested APIs using Thunder Client**

   * Sent **POST request** with JSON body:

     ```json
     {
       "website": "youtube.com",
       "timeSpent": 120
     }
     ```

   * Received **200 OK response** confirming data saved

   * Sent **GET request** to fetch all logs

   * Received **200 OK response** with array of data

5. **Verified in MongoDB Atlas**

   * Data was stored in `productivitydb` under `timelogs` collection

---

#### **🔷 API Testing Proof (Thunder Client)**

✅ **POST request screenshot** – showing data inserted
✅ **GET request screenshot** – showing array of time logs
✅ **Terminal screenshot** – showing MongoDB connected and server running

---

#### **🔷 Challenges Faced**

* Faced connection errors due to MongoDB driver versions and cluster setup
* Solved by creating new database users, updating connection URIs, and restarting server

---

#### **🔷 Conclusion**

I successfully developed the **backend for the productivity tracker Chrome extension** using the MERN stack. The APIs are ready to integrate with the Chrome extension frontend to monitor time spent on websites and provide daily productivity reports efficiently.

---