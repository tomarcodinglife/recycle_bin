let demoText = "Hi i am Sujit Tomar Learning JavaScript"
console.log(demoText)

let qsid = document.querySelector('#sub-box')
console.log(qsid)
/* return 
        <div id="sub-box">
            <h1>Sujit Kumar Singh</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque aliquam perferendis veniam vitae molestiae, quas quisquam dolore aperiam voluptatem unde qui delectus nihil dolorum neque quae consequatur quaerat facilis.</p>
        </div>  
*/
let pqsid = document.querySelector('p')
console.log(pqsid)
/* return 
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque aliquam perferendis veniam vitae molestiae, quas quisquam dolore aperiam voluptatem unde qui delectus nihil dolorum neque quae consequatur quaerat facilis.
</p>
*/

pqsid.style.color = 'red'

//*************************************************************** */

let qsaid = document.querySelectorAll('#sub-box')
console.log(qsaid[0])
/* return 
        <div id="sub-box">
            <h1>Sujit Kumar Singh</h1>
            <p style="color: red;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque aliquam perferendis veniam vitae molestiae, quas quisquam dolore aperiam voluptatem unde qui delectus nihil dolorum neque quae consequatur quaerat facilis.</p>
        </div>
*/

console.log(qsaid[1])
/* return 
        <div id="sub-box">
            <h1>Sujit Tomar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque aliquam perferendis veniam vitae molestiae, quas quisquam dolore aperiam voluptatem unde qui delectus nihil dolorum neque quae consequatur quaerat facilis.</p>
        </div>
*/

qsaid[1].style.backgroundColor='green'
qsaid[1].style.borderRadius='15px'
qsaid[1].style.padding='5px'