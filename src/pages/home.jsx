import SearchBanner from "../components/SearchBanner";

export default function Home() {
  return (
    <>
    <h1>oi from home</h1>
    <SearchBanner 
    value={"input"} 
    onChange={()=>{console.log("onchange")}}
    onClick={()=>{console.log("onclick")}}
    />

    </> 
  )
}