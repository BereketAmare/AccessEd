

import React from 'react';
import '../style.css';
import PetitionForm from './PetitionForm';
import Footer from './Footer';
import store from '../Redux/store';
import { useSelector } from 'react-redux';


function Home() {
  const value = useSelector((state) => state.primary); 
  const value2 = useSelector((state) => state.secondary); 

    
  return (
    
    <div class={`bg-${value} text-${value2}`}>
        
        <div class="mt-10  text-center">
            <div class='text-3xl '>My Activism Project: Education Access</div>
            <h3 class="text-xl">Bridging the education divide </h3>
        </div>
        <div class="flex mt-3 justify-center">
            <a href="#" class="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Donate</a>
            <a href="#" class="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Similar Sites</a>
        </div>

        <div class="py-12 px-4">
            <h2 class="text-2xl font-semibold mb-4">About My Topic</h2>

            <div class="ml-8 text-gray-700 text-lg">
                <p class="mb-2">I am dedicated to addressing the lack of access to education in underprivileged communities.</p>
                <p class="mb-2">Education is one of the most fundamental resources for humanity, and its absence in certain communities is a pressing issue.</p>
                <p>Let's explore why this problem exists and its implications.</p>
            </div>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Data about my topic</h2>

            <h4 class="text-xl font-semibold mb-2">Facts about poor access to education According to the United Nations</h4>

            <div class="ml-8 text-gray-700 text-lg">
                <ul class="list-disc pl-6 mb-4">
                    <li>In 2021, approximately 258 million children and adolescents were out of school globally.</li>
                    <li>Of these, 64% were girls, and the majority (89%) lived in low- and lower-middle-income countries.</li>
                </ul>

                <ol class="list-decimal pl-6">
                    <li>In 2021, approximately 258 million children and adolescents were out of school globally.</li>
                    <li>Of these, 64% were girls, and the majority (89%) lived in low- and lower-middle-income countries.</li>
                </ol>
            </div>
        </div>

        <div class="py-8 px-4 mx-12">

            <section class="mb-8">
            <h2 class="text-3xl font-semibold mb-2">Impact!</h2>
            <div class="mb-4">
                <img src="./images/image_2023-03-04_144030648.png" alt="Kids reading books" class="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
            <p class="text-lg text-gray-700">Kids reading books</p>
            </section>

            <section class="mb-8">
            <div class="mb-4">
                <img src="./images/image_2023-03-08_114350995.png" alt="Middle school girls writing" class="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
            <p class="text-lg text-gray-700">Disadvantaged groups get the most from the education access program</p>
            </section>

            <section class="mb-8">
            <h3 class="text-xl font-semibold mb-2">Where can this problem have lasting effects?</h3>
            <p class="text-lg text-gray-700">Why?</p>
            </section>

            <section class="mb-8">
            <h3 class="text-xl font-semibold mb-2">Where else can this problem have lasting effects?</h3>
            <p class="text-lg text-gray-700">Why?</p>
            </section>

            <section class="mb-8">
            <h3 class="text-xl font-semibold mb-2">Where else else can this problem have lasting effects?</h3>
            <p class="text-lg text-gray-700">Why?</p>
            </section>

            <section class="mb-8">
            <iframe width="680" height="320" src="https://www.youtube.com/embed/6ekBEXU_s1E" title="Equal Access to Education" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="rounded-lg shadow-lg"></iframe>
            </section>

            <section>
            <h2 class="text-3xl font-semibold">Sign Our Petition 📢</h2>
            </section>

        </div>

    <PetitionForm />
    <Footer />
    </div>
  );
}

export default Home;

