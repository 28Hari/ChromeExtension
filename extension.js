let myLeads=[]
const inputEl=document.getElementById("input-el")
const saveBtn=document.getElementById("save-btn")
const ulList=document.getElementById("ul-li")
const deleteBtn=document.getElementById("delete-btn")
const leadsfromLocal=JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("tab-btn")
console.log(leadsfromLocal)

if (leadsfromLocal){
  myLeads=leadsfromLocal
  renderLead(myLeads)
}

tabBtn.addEventListener("click",function(){
chrome.tabs.query({active:true,currentWindow:true},function(tabs){
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  renderLead(myLeads)
})
})

function renderLead(leads){
  let listItems=" "
  for(let i=0;i<leads.length;i++){
  listItems +=`<li>
  <a href='${leads[i]}' target='blank'>
  ${leads[i]}
  </a>
  </li>`
  }
  ulList.innerHTML=listItems
  }

deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[]
  renderLead(myLeads)
})

saveBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=" "
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
  //  console.log(myLeads)
  renderLead(myLeads)

  console.log(localStorage.getItem("myLeads"))

})

