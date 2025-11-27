# css

- object contain vs object cover inside image
- object cover may croped the image
- object contain never croped the image

FOR HOVER EFFECT

- <div className="border rounded p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300">
  hover:shadow-lg → adds shadow on hover

hover:scale-105 → makes card slightly bigger

transition-transform duration-300 → smooth animation

✅ object-cover

The image fills the entire box

No empty space

Some cropping can happen (edges cut)

Best for profile pics, thumbnails, product previews

🔽 object-contain

The entire image is shown without cropping

Adds empty space if image size ratio is different

Best for product main image, big preview, large display

🔽 w-fit in tailwind:- it has a major roll on css

# steps

✅ Step 4: Show Full Product Details on ProductPage

Right now, ProductPage only prints the ID.
Now we will fetch the single product’s full details using that ID and display it.

This step is important because:
✔ You will learn dynamic API fetching
✔ You will use useParams() properly
✔ You will build a real product detail page

# concepts

🧩 What useParams Does
useParams is a React Router hook (v5.1+ and v6) that lets you access the dynamic parameters from the current URL.
📦 Return Value

- It returns an object containing key–value pairs of the route parameters.
- The keys are the names you defined in your route path (like :id, :slug).
- The values are the actual strings from the URL.

notes on useparams(dynamic routing)

- while routing in main must give column like- path:'/product/:id',
- while clicking at ghe time of linking give like- (<Link to={`/product/${product.id}`}>) no column
- the page(give as element inside route) which open when we click , use usseParams to find id if want to fetch ( fetch(`https://dummyjson.com/products/${id}`)) any data regarding that id and can show in that page.

- The colon (:) tells React Router:
  👉 “This part of the URL is dynamic, not fixed text.
