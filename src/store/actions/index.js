


// export default class RecipieAction {

//     static OpenDialogue = "OPENDIALOGUE";

//     // static isDaialogueOpen(dialogueopen){
//     //     console.log('checking')
//     //     return  {
//     //         type: "check",
//     //         dialogueopen
//     //     }
//     // }
// }

// export default function isDaialogueOpen(){
//     return {
//         type: 'check'
//     }
// }
export const isDaialogueOpen = (text) => ({

  type: 'open',
  text
})


export const getrecipi =(payload)=>{
  console.log("payload====",payload)
  type:"getrecipi",
  payload
}