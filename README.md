# Express Practice

# Windows users - Make sure you remove single quotes from the package.json

# Part 1 - Server

### server/index.js
X This is the starting point of the server, put all code here

### Body
X Add body parser middleware to express

### Create express routes to get all things
X Add .get() routes for /contacts, /vehicles, /comments, /products
X response.json() the appropriate array

### Create express routes to get one thing
X Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
X add a path variable for id
* use the params.id to .find() the item from the appropriate array
* response.json() the item found

### Create express routes to create one thing
X Add .post() routes for /contacts, /vehicles, /comments, /products
X Add the information from the body to the appropriate array

At this point, the web page should operate in the same manner as the redux fetch practice

# Part 2 - Routes
X Create route files
X Import the arrays into the route

X Organize the routes for /contacts, /vehicles, /comments, /products using express Router

X Import and use the Routers in index.js

# Part 3 - Controllers
X Create controller files
X Import the arrays into the controller

X Take the code from the routes and put it into the controller

X create functions for list, show and create

X Import and use the controller functions in the appropriate Router

# Part 4 - Client

## Redux

### Reducers
X create 4 more reducers for the state: vehicle, product, comment, contact
X vehicle
    * look for “GET_VEHICLE_DONE”
X product
    * look for “GET_PRODUCT_DONE”
X comment
    * look for “GET_COMMENT_DONE”
X contact
    * look for “GET_CONTACT_DONE”
*

### Actions
X Create actions in actions/index.js
X Create actions to do to a fetch call to one item. When complete, dispatch to the done action.
    X getProduct(id)
        * fetch(“/products/“ + id)
    X getVehicle(id)
        * fetch(“/vehicles/“ + id)
    X getComment(id)
        * fetch(“/comments/“ + id)
    X getContact(id)
        * fetch(“/contacts/“ + id)
X Create actions to handle the data
    X getProductDone(product)
        * GET_PRODUCT_DONE
    X getVehicleDone(vehicle)
        * GET_VEHICLE_DONE
    X getComment(comment)
        * GET_COMMENT_DONE
    X getContact(contact)
        * GET_CONTACT_DONE


### Components
X Create class components to show the details of each Type in our system
JK NOTES:
For full listing on landing page, components below with corresponding controllers:
* Vehicle.js, Product.js, Contact.js, Comment.js

For single item listing on item specific landing page, components below with corresponding controllers:
* VehicleSingle.js, ProductSingle.js, ContactSingle.js, CommentSingle.js

X Use the instructions from Containers to decide what props to use
X You decide what to show in the detail (HTML wise)
X In componentDidMount
    X Extract the path parameter id
    X call the appropriate get action to get one thing
    X for Vehicle.js you would call getVehicle(id)

### Containers
X Create containers for Vehicle, Product, Contact, Comment

X Also created for VehicleSingle, ProductSingle, ContactSingle, CommentSingle

X Implement mapStateToProps
    X For Vehicle.js, map a prop called vehicle to the state.vehicle
    X What should the state be for Product.js, Contact.js and Comment.js
X Implement mapDispatchToProps
    X For Vehicle.js map a prop called getVehicle to the action getVehicle
    X What should you do for Product.js, Contact.js and Comment.js

### React Router
X Use react-router-dom
X Import BrowserRouter, Switch and Route into App.js
X Create routes for each detail container component
    X /vehicle/:id -> Vehicle
    X …etc
    X / -> show the Main component

#### Link
X Look at client/components/CollapsableMapper.js
X Change the `<a>` tag to `<Link>`

# Part 5 - Database
X In src/index.js, import and use mongoose. Connect to a database "advanced-express-practice"
X Create the mongoose models for Contact, Vehicle, Comment Product
X CommentModel - body
X ContactModel - name, occupation, avatar
X VehicleModel - year, make, model
X ProductModel - name, description
X Change the code in the controllers to use the Models instead of hard coded arrays

### Points
* Base - 10pts
* Data shows in the page for the Lists - 5pts each (20pts)
* Creating data works - 10pts each (40pts)
* Can view one item at a time by id - 30pts
