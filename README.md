# Career Path Test 

To implement the career path test we will use a tech stack of React with Typescript, Tailwind for Styling, and React Router to handle how user params are captured. In this README I will list the technical problems I come across and my though process as to the best way to resolve them.

# Capturing Username
By using react router we can easily get the username passed in the URL by using the useSearchParams() hook. Since no AC was provided for no username, we will just not show the actual test when no username is passed. As soon as a username is found, we will call the API for the test questions, and can determine if this is a new test or not.


# Fetching Questions and passing into Test Component
Next we can get the questions through normal fetch call. Here we used a useEffect to grab the question on render, but would typically try to use something like ReactQuery to handle this and implement into our state. The challenge here is to identify if questions have already been answered, if they have, we  need to either work out how far the user has gotten, or if they have completed the test. I have left some TODOs here as I would prefer to get on with the Test component first. Other things considered here is a loading state on the chance questions take a while to load. Also we are making th assumption data is always in the same order, typically a unique code or some order identifier would be useful here.