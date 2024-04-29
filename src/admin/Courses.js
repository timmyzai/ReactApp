import React, { useEffect, useState } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const coursesCollectionRef = collection(db, "courses");

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getDocs(coursesCollectionRef);
      setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchCourses();
  }, []);

  // Add more CRUD functions here

  return (
    <div>
      <h2>Manage Courses</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button onClick={() => {/* delete function */}}>Delete</button>
        </div>
      ))}
      {/* Form to add/update courses */}
    </div>
  );
};

export default Courses;
