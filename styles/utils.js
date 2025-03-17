import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://qwjpkktaomqxsqdpkywu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3anBra3Rhb21xeHNxZHBreXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxODgzMzMsImV4cCI6MjA1Nzc2NDMzM30.AO_QT3px8sCqCKqRD_S-kvFinEvaVAfp-qpXK0nfplA'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
    let { data: books, error } = await supabase
    .from('books')
    .select('*')
          
    for (let book of books) {
        let booklist = document.getElementById('books');
        booklist.innerHTML += `<tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
            </tr>`;
    }
}

getBooks();