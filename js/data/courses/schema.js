// Original Indonesian teaching text. Source links identify the supporting textbook section.
// Coverage tags map to the user's master specification, not to keyword inference.
export const source=(volume,page)=>`https://openstax.org/books/university-physics-volume-${volume}/pages/${page}`;
export function lesson(id,title,domainId,level,topics,intuition,explanation,advanced,example,activity,question,answer,distractors,reason,url,sim=null){
 return {id,title,domainId,level,topics,intuition,explanation,advanced,example,activity,question,answer,distractors,reason,url,sim,minutes:Math.max(8,Math.ceil((intuition+explanation+advanced+example+activity).split(/\s+/).length/70)+5),objectives:topics.map(t=>`Menjelaskan ${t} melalui model atau contoh.`)};
}
