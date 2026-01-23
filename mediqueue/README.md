This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



Arjit's Notes 😎
{My new understanding/learning while making this project }

############################ Custom Form Field ############################

I learned about Custom Props and how good they are. 
Custom Props are like defined field of a form that you must provide to use that component so in future you will not miss out any value while using that component vs code will automatically throw error that this components needs these attributes as well but if don't use custom props then you will have to pass props without knowing exactly how many childs you have to send along with that vs code helps in autocompletion if we make custom props so it makes easier to understand.

We used interface to define custom prop -> interface is a keyword that we use to define the structure of a component here it is acting as a blueprint of custom prop. interface is just like a map of a house which we build it so that we know what are required and we have the blueprint before hand.



############################ Database ############################

I learned about a new tech : app write 

For databse we are using appwrite => It provides us to have a complete ready backend that we can cofigure and then directly attach to our file/project. We can also configure API end points using app write.

To use it in my project i made endpoints at app write and then copied its keys/ids in my .env file and then in lib we can make a file appwrite.config file there we can destructure the endpoints that we took from app write and one more important step is to install node package of app write (faced this issue while making => aage se yaad rakhna hai ye as isme 1 ghanta gaya debug karne mein ).
 
In appwrite make attributes and after that define the attributes in appwrite.types.ts file there along with the table name define all the attributes.
Along with that deine all the userParams (user parameters) in index.d.ts file
The one with not required parameters we have to write undefined for them.

Main question how we will connect the server to our file what exactly will be our endpoint so that is present in the appwrite.config.ts file there we have to initialise the client but before that we have to import software development kit (sdk) and then using that initialise client. Export all the env variables. Connect endpoint, project enpoint, and api key with client then after that to use utilities like database messaging etc use variables to connect with the utilities and then if we want to use those utilities in any file we can simply import that input from the config file and use it. For example the variable will look like : 

export const databases = new sdk.Databases(client);

One more important thing we will have to use "use server" on top of the config file as we are integrating database from here so it should not be visible from the client side.
After that install the node package of appwrite : npm install "node-appwrite"



Error that i was fixed today : for the form the field of phone : in default structure it was looking like : 
const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    },
  });

  So here the first letter of phone was small while calling the component for phone i wrote : 
  <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="Phone"
          label="Phone number"
          placeholder="8810811756"
  />

  Here in name="Phone" the first letter was capital that's why it was not working so sometimes we should focus on these type of small bugs 