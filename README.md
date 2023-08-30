# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`


### API informacije
Moj Openweathermap.org API KEY = 'aa6ceb23fdb262039c170ab24b33fd67'
Note: 16 dnevna prognoza , kao history (povjest prognoze) nije dostupna za besplatno korisštenje pa odustajem od tih mogućnosti

# Node verzija 18.16.1

# Backend

Dodani si u paketi express i fs pomću npm (npm instal --save epress i npm install -save fs) - koji nam služe da smo kreirali interni API koji nam služi za čuvvanje naših graova favorita, također pomoću njega možemo brisati i dodavati gradove u server/gradovi.json .

Paket concurrently nam služi da istovremeno pokrenmo react aplikaciju na port 3000 a node epress aplikaciju na port 5000 , gdje smo morali i modificirati 
scripts dio u package.json to je omogućeno preko paketa: concurrently

    "start": "concurrently \"npm run server\" \"npm run react\"",
    "react": "react-scripts start",
    "server": "node src/server/api.js",

### Stilizacija

Za stilizaciju smo koristili komponete iz MDB React ui (mdb-react-ui-kit)


