import Navbar from './Navbar'
import Head from 'next/head'

const Layout = (props)=>{
return(

<div>
<Head>
<title>{props.title}</title>
<meta name="description" content={props.description} />
<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
</Head>
<Navbar/>

<div className="container">

{props.children}
</div>

</div>

	)
}

export default Layout