//idvalue , title , message

window.indexedDB = window.indexedDB || window.mozIndexedDb || window.webkitIndexedDB || window.msIndexedDB ;

if(!window.indexedDB) {
    alert("Sorry to say, the application is not supported, please contact the developer");
}

let request = window.indexedDB.open("Notes" , 1) , 
    db,
    tx ,
    store ,
    index ;

    request.onupgradeneeded = e =>{
        let db = request.result ,
        store = db.createObjectStore("Notes" , {autoIncrement: true}) ,

        index = store.createIndex("Title" , "Title" , {unique:false});

    }

    request.onerror = e => {
        console.log("ERROR " , e);
    }
    
    function putdata() {
        var bla = document.getElementById('name4').value ;
        var bla1 = document.getElementById('icon_prefix2').value ;
        console.log(bla);

       }
       document.getElementById("submitnote").onclick = putdata  ;

    request.onsuccess = e => {

        db = request.result;
        console.log(db);
        tx = db.transaction("Notes" , "readwrite");
        store = tx.objectStore("Notes") ;
        index = store.index("Title");

        // function readAll() {
        //     var objectStore = db.transaction("Notes").objectStore("Notes");   
        //     objectStore.openCursor().onsuccess = function(event) {
        //        var cursor = event.target.result;
               
        //        if (cursor) {
        //         console.log(cursor.key , cursor.value.Title ,  cursor.value.Body
        //         );
        //         cursor.continue();  
            
        //        } else {
        //           alert("No more entries!");
        //        }
        //     };
        // }


        db.onerror = e => {
            console.log("error, please provide permission! " , e);
        }

       

        // store.put(
        //     { Title: "New Blog" , Body: "THIS IS my new blog attempt! " }
        // );

        // store.put(
        //     { Title: "Two Blog" , Body: " Two, THIS IS my new blog attempt! " }
        // );


        let q1 = store.getAll();
        q1.onsuccess = function() {
            console.log(q1.result);
        }

    tx.oncomplete = e => {
        db.close()
    }
    }




