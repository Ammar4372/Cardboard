
import { HiOutlineColorSwatch } from 'react-icons/hi'
import { BiImageAdd, BiText } from 'react-icons/bi'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { imagesCollector } from '../../Store/slices/imagesContainerSlice';
import { setSideColor } from '../../Store/slices/sideColor';


const Design = () => {
    const [selImage, setSelImage] = useState({
        front: '',
        left: '',
        right: '',
        back: '',
        bottom: ''
    });

    const selectedSide = useSelector((state) => {
        return state.sideChanged
    });

    const [ color, setColor ] = useState(null);

    const [imageCheck, setCheckImage] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        fetch('http://127.0.0.1:3000/upload', {
            method: 'POST',
            body: data
        }).then(async (res)=>{
            imageSetter(await res.json())
        })
        
    }

    const imageSetter = (image) => {

        if (selectedSide === 'front') {
            setSelImage({ ...selImage, front: image });
            setCheckImage(true);
        }

        if (selectedSide === 'left') {
            setSelImage({ ...selImage, left: image });
            setCheckImage(true);
        }

        if (selectedSide === 'right') {
            setSelImage({ ...selImage, right: image });
            setCheckImage(true);
        }

        if (selectedSide === 'back') {
            setSelImage({ ...selImage, back: image });
            setCheckImage(true);
        }

        if (selectedSide === 'bottom') {
            setSelImage({ ...selImage, bottom: image });
            setCheckImage(true);
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(imagesCollector(selImage));
    }, [selImage]);

    useEffect(() => {
        dispatch(setSideColor(color));
    }, [color]);


    return (
        <>
            <div className="accordion mt-2 w-100" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <HiOutlineColorSwatch />
                            &nbsp;&nbsp;Select color
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body d-flex justify-content-between align-items-center">
                            <label htmlFor="colors" className=' fs-6 fw-medium'>Select Color</label>
                            <input type="color" name="file" id="colors" onChange={(e)=>setColor(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <BiImageAdd />
                            &nbsp;&nbsp;Add images
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body d-flex justify-content-between align-items-center flex-column gap-2">
                            <div className="imgSizeBtn d-flex justify-content-around align-items-center flex-column">
                                <ul className=' d-flex align-items-center flex-row fs-6 fw-semibold'>
                                    <li>Fit</li>
                                    <li>Center</li>
                                    <li>Cover</li>
                                </ul>
                            </div>
                            <div className="imgSelector d-flex justify-content-between align-items-center flex-column gap-2 ">
                                <form onSubmit={submitHandler} method="post" encType="multipart/form-data" className=" d-flex justify-content-between align-items-center flex-column">
                                    <input className="form-control" type="file" name='boxImage' id="formFile" accept="image/png, image/jpg, image/jpeg" required />
                                    <span>.jpg .jpeg .png</span>
                                    <input type="submit" value="Upload" className="btn btn-outline-primary mt-3 px-5" />
                                </form>
                                <div className="removeImg mt-3">
                                    <button type="button" className="btn btn-outline-secondary">Remove Image</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <BiText />
                            &nbsp;&nbsp;Add text
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body d-flex justify-content-between flex-column gap-2">
                            <label htmlFor="textInput" className=' fw-semibold'>Type text</label>
                            <input type="text" name="textInput" id="textInput" placeholder='Type here...' className=' w-100 fw-medium p-1 border-secondary rounded' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' d-flex justify-content-center align-items-center mw-25 h-25 mt-1'>
                {imageCheck && <img src={selImage[selectedSide]} alt="not found!" className=' w-100 h-100' />}
            </div>
        </>
    )
}

export default Design