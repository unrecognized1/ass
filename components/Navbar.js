import Link from 'next/link'

const Navbar = ()=>(

	<div>
		<ul>
			<li><Link href="/"><a >Home</a></Link></li>
			<li><Link href="/about"><a >About</a></Link></li>
		</ul>



<style jsx>
{`


  ul{
  	background:#333;
  	list-style-type:none;
  	display:flex;
  }
  ul li a{
  
  	  	color:#fff;
  }

	`}
</style>


	</div>




	)

export default Navbar