Author: Flávio Lages
Next Js, Tailwindcss        


/nextjs - Clean Project




/nextjs-menu - Animated Side Navigation (Tailwindcss, React-Icons)
    
    [Tailwindcss]
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    npx tailwindcss init -p
    // tailwind.config.js
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    // styles/globals.css 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    [React Icons]
    npm install react-icons --save








/git
    git clone https://github.com/flaviolages/nextjs.git
    git remote add origin https://github.com/flaviolages/nextjs.git
    git branch -M main
    git push -u origin main


Calculo .rem CSS
30 / 16 = 1.875rem
28px = 1.75rem tailwindcss "m-7"
