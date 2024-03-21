// JavaScript – forEachDOM
// The following exercise contains the following subjects:
// ● DOM
// ● foreach
// Instructions
// You get an array of objects of users from your database:
const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
// 2. Remove the bullet points of the ordered list with
// JavaScript.
// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.
// Your markup should look like this:

//<ol style="list-style-type: none; ">
//  <li data-id="167464">Jimmy Arnold</li> ==
//  <li data-id="578447">Martha Goldman</li>
//  <li data-id="864578">Tim Burton</li>
//</ol>;

const userList = document.querySelector(".userList");
userList.style.listStyleType = "none";

users.forEach((user) => {
  const li = document.createElement("li");
  li.textContent = `${user.firstName} ${user.lastName}`;
  li.setAttribute("data-id", user.id);
  userList.appendChild(li);
});
