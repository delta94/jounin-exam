### Nama : Taufiq Widi Nugroho
### Track : Fullstack Mobile
### Batch : 17 - 1

#### Teori

 1. Perbedaan Library dan Framework yaitu, 
    Library: berisi program yg dapat mempermudah dalam pembuatan aplikasi. 
    Framework: dapat berisi beberapa library yg sudah membentuk kerangka aplikasi untuk mempermudah dalam mendevelop suatu aplikasi.
    
 2. Perbedaan Working directory, Index, dan Head
    * Working directory: direktori dari pekerjaan yg kita lihat dan edit.
    * Index (staging area): kita bisa melihat file yg akan kita commit dan bisa buat mengevaluasi kembali.
    * Head: referensi atau penanda dari branch mana kita sedang bekerja.
    
 3. cara untuk remote repository dari local repository bisa pakai perintah git push <nama branch di remote> <branch di local>. contoh : ``` git push origin master ```.
 
 4. http method
      * GET
      * PATCH
      * DELETE
      * PUT
      * POST
        
  5. ``` SELECT user FROM users WHERE user = 'Arkademy';```
  
  6. perbedaan Authorization dan Authentication
        * Authentication adalah proses pengecekan identitas dari user (biasanya ketika akan login)
        * Authorization adalah pemberian privilege pada suatu user sesuai dengan roles nya (setelah proses autentikasi).
        
  7. Framework Express adalah framework untuk nodejs yang dipakai untuk mengembangkan sebuah aplikasi web
  
   8. Middleware
        sebuah software yg biasanya digunakan sebagai bridge antara satu program dengan program lainnya. manfaatnya adalah dapat dilakukan pengecekan maupun pengolahan dari suatu masukan sebelum masukan itu masuk ke dalam program yg dituju.

 9.  Perbedaan Class component dan Functional component
        * Class Component memiliki state dan props.
        * Class Component memiliki lifecycles.
        * Functional Component hanya memiliki props. (tapi dengan react hooks functional component dapat memiliki state)
        * Functional Component tidak memiliki lifcycles. (tapi dengan react hooks functional component bisa mengemulasikan lifecycle seperti pada class component)
        * Dalam react, dapat mereference pada class component (karena berupa instance), sedangkan untuk functional component tidak dapat di refer.
        
 10. Redux 
        Redux adalah salah satu state management library dalam javascript.
  
11. Microservice adalah arsitektur dalam pengembangan aplikasi dimana tiap component independent atas fungsinya masing-masing. 
    keuntungannya adalah:
        * scalable
        * tiap component bisa dibangun dengan bahasa pemrograman yg berbeda
        * tiap component terisolasi dari component yg lainnya
        * maintainability yg bagus
  
 12. content-type adalah sebuah HTTP Headers yg digunakan sebagai penanda dari type data body yg dikirim dari request.
  
 13. CDN (Content Delivery Network) adalah sekumpulan server yang biasanya terletak diberbagai lokasi. Tujuan adanya CDN ini adalah untuk mempercepat pengiriman data ke berbagai sumber (dalam hal ini adalah website) tanpa harus request ke server hosting utama. jadi misalkan kita request sebuah data dari sebuah website (misalkan kita requset file bootstrap cdn), nah website tersebut sudah menggunakan CDN yang lokasinya paling dekat dengan yang meminta request, jadi pengiriman data akan lebih dekat dan menghemat bandwidth. manfaat CDN yaitu mempercepat pengiriman data, menghemat bandwidth, menaikan kecepatan website, dan masih banyak lagi.
 
 14. Error CORS terjadi apabila ada perbedaan origin (ip maupun port) dari pengirim ke penerima ketika melakukan transfer resource.
 15. Perbedaan cookie, sessionStorage, dan localStorage yaitu:
        * cookie adalah tempat menyimpan data pada browser yang memiliki masa expired.
        * sessionLogin adalah tempat meyimpan data pada browser, namun akan hilang jika tab/browser ditutup.
        * localStorage dalah tempat menyimpan data pada browser. bisa dibilang permanent. karena akan hilang jika user memang sengaja menghapusnya.
  
  
