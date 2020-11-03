# En este repositorio se puede encontrar una variedad de archivos como HTML, CSS, SASS, PUG y JS

###### PUG-CLI para compilar pug y convertirlos a HTML

Instalar pug-cli
```sh
$ npm i pug-cli -g
```

Descripción de los comandos

1. Compila un archivo pug a html sin formato una sola vez.
2. Compila cada vez que el archivo cambia, pero sin indentación de html.
3. Compila e indenta el archivo html que genera, observando cada cambio.
4. Compila todo un directorio que contenga archivos pug y los genera en html.
5. Compila todos los cambios y de manera indetada y esto hace que se escuchen los cambios en la carpeta includes los compile los que estan en la carpeta pages y los coloca el html ya compilado en otra carpeta llamada 'dist'

Comandos para compilar pug a html 
```sh 
$ pug archivo.pug 
$ pug -w archivo.pug
$ pug -w --pretry archivo.pug
$ pug directorio
$ pug -w --pretty pages -o dist -p includes
```
