# Frontend Libraries

Best Frontend Libraries which has been used by folks working at facebook,Google,Microsoft and may more.

## Running locally

```bash
git clone https://github.com/pranavp10/Frontend-Libraries.git
cd Frontend-Libraries
yarn
yarn dev
```

## Built using

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Deployed on

- [Vercel](https://vercel.com)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature or bug branch (`git checkout -b feature/amazingFeature`) `or` (`git checkout -b bug/bugName`)
3. Commit your changes (`git commit -m 'comment'`)
4. Push to the branch (`git push origin feature/amazingFeature`) `or`(`git push origin bug/bugName`)
5. Open a Pull Request

### Adding new library

1. Upload the icons to public/icons
2. Navigate to the `/src/data`
3. Select the section you want to add the libary
4. Modify the below object

5.

 ```js
    {
    githubLink: '',
    website: '',
    name: 'React',
    path: 'icons/iconname.png',
    tried: false, //don't modify this object
    },
    ```

1. Create a new branch (`git checkout -b Library/Name`)
2. Commit your changes (`git commit -m 'add this new library'`)
3. Push to the branch (`git push origin Library/Name`)
4.  Open a pull request
