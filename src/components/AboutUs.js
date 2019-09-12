import React, {Component} from 'react';

class AboutUs extends Component {
    render() {
        return (<section className="about-us">
                <div className='info'>
                    <span>O nas</span>
                    <img className='decorrat' src='/src/assets/Decoration.svg'/>
                    <p className='nori'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
                        celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img className='signature' src='/src/assets/Signature.svg'/>
                </div>
                <img className='people' src='/src/assets/People.jpg'/>
            </section>
        )
    }
}
export default AboutUs;