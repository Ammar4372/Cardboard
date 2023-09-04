import './detailViewer.css';

const DetailViewer = ({heading, secDisc, content}) => {
  return (
    <>
        <section className="detials-viewer">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 mx-auto">
						<h1 className="heading">{heading}</h1>
						<p className="section-disc">{secDisc}</p>
					</div>
				</div>
				<div>
					{content}
				</div>
			</div>
		</section>
    </>
  )
}

export default DetailViewer