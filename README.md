# Vremenska prognoza React App

Ova je aplikacija koja dobiva trenutne informacije za upisani grad, a sadrži i dio gdje imao favorizirane gradove koje možemo dodavti i brisati .
Mehanizam favoriziranih gradova (učitavanje, dodavanje i brisanje ) radi pomoću node express paketa.

## Pokretanje aplikacije

Preduvijet node je verzija 18.16.1 , IDE koji je korišten je VSCode.

mislim da bi trebalo radi i na drugim verzijama starijim od 16  opa na više ali nije testirano
Pozocijonirati se u root projekta u terminalu i onda pokrenuti `npm install` i nakon toga `npm start` . Aplikacija je onda dostupna na `http://localhost:3000/`
### Prije pokretnaja odraditi `npm install` onda pokrenuti `npm start` 


### API informacije
Moj Openweathermap.org API KEY = 'aa6ceb23fdb262039c170ab24b33fd67'
Note: 16 dnevna prognoza i satna, kao history (povjest prognoze) nije dostupna za besplatno korištenje pa odustajem od tih mogućnosti

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

### Upravljanjem stanjem (managment state)

Za upravljanjem stanja korišten paket `zustand` koji se instalira "npm install zustand" dokumentacija: https://github.com/pmndrs/zustand


