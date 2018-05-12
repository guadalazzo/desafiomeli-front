import Head from 'next/head'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'

export default (props)=> <div>
		<Head>
			<title>Mercado Libre</title>
			<meta name="viewport" content="initial-scale=1.0; width=device-width;" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
		</Head>
		<Header>
			<SearchBox>
			</SearchBox>
		</Header>

		{ props.children }

		<style jsx>{`
			
			:global(body) {
				background: #f0f0f0;
				margin: 0;
				font-family: system-ui;
			}
			`}</style>
			</div>
 	