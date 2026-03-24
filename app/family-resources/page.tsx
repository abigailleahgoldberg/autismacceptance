import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Autism Resources for Families & Caregivers | Autism Acceptance",
  description: "Comprehensive resources for families, parents, and caregivers of autistic people. Information, support, and community.",
};
export default function FamilyResourcesPage() {
  const G = "#0891B2";
  return (
    <div style={{minHeight:"100vh",background:"#ECFDF5",color:"#0D0D0D",fontFamily:"system-ui,sans-serif"}}>
      <nav style={{padding:"16px 5vw",borderBottom:"1px solid #CCFBF1",display:"flex",justifyContent:"space-between",alignItems:"center",background:"white"}}>
        <Link href="/" style={{fontWeight:900,fontSize:20,color:"#0D0D0D",textDecoration:"none"}}>Autism Acceptance</Link>
        <Link href="/blog" style={{color:"#666",textDecoration:"none",fontSize:14}}>← Back</Link>
      </nav>
      <div style={{maxWidth:800,margin:"0 auto",padding:"60px 5vw"}}>
        <div style={{fontSize:11,letterSpacing:"2px",color:G,marginBottom:16}}>RESOURCE CENTER</div>
        <h1 style={{fontSize:"clamp(28px,4vw,46px)",fontWeight:900,lineHeight:1.1,marginBottom:24}}>Resources for Families & Caregivers</h1>
        <p style={{fontSize:18,color:"#444",lineHeight:1.7,marginBottom:40}}>Support, information, and community for families of autistic people. From diagnosis to adulthood, we are here to help.</p>
        
        {[
          {title:"Getting a Diagnosis",desc:"Navigating evaluation, finding providers, understanding results, and next steps after diagnosis."},
          {title:"School & Education",desc:"IEP processes, accommodations, inclusive education, and advocating for your child's needs."},
          {title:"Daily Life & Parenting",desc:"Strategies, support, and advice for day-to-day parenting of an autistic child."},
          {title:"Transition to Adulthood",desc:"Planning for post-school life, independence, employment, and adult community."},
          {title:"Mental Health & Support",desc:"Managing anxiety, therapy, support groups, and mental health resources."},
          {title:"Communication & Behavior",desc:"Understanding autistic communication and behavior, and how to support your child."},
        ].map((s,i) => (
          <div key={i} style={{background:"white",border:"1px solid #CCFBF1",borderRadius:8,padding:"20px",marginBottom:16}}>
            <h3 style={{fontSize:15,fontWeight:700,color:G,marginBottom:8}}>{s.title}</h3>
            <p style={{fontSize:13,color:"#666",margin:0}}>{s.desc}</p>
          </div>
        ))}
        
        <div style={{background:G,color:"white",padding:"32px",borderRadius:8,textAlign:"center",marginTop:40}}>
          <h2 style={{fontSize:16,fontWeight:900,marginBottom:10}}>Join Our Community</h2>
          <p style={{fontSize:13,opacity:0.9,marginBottom:16}}>Connect with other families, share experiences, and find support.</p>
          <Link href="/contact" style={{background:"white",color:G,fontWeight:800,fontSize:12,padding:"10px 20px",textDecoration:"none",borderRadius:4,display:"inline-block"}}>Get Involved →</Link>
        </div>
      </div>
    </div>
  );
}
