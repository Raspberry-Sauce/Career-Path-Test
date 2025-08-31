# Career Path Test 

To implement the career path test we will use a tech stack of React with Typescript, Tailwind for Styling, and React Router to handle how user params are captured. In this README I will list the technical problems I come across and my though process as to the best way to resolve them.

# Capturing Username
By using react router we can easily get the username passed in the URL by using the useSearchParams() hook. Since no AC was provided for no username, we will just not show the actual test when no username is passed. As soon as a username is found, we will call the API for the test questions, and can determine if this is a new test or not.
