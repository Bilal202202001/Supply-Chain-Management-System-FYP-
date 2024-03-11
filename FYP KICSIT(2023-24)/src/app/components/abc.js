'use client'
import React, { useState } from 'react';

export default async function Faq() {
  const [que1, setQues1] = useState(false);
  const [que2, setQues2] = useState(false);
  const [que3, setQues3] = useState(false);

  const handleForQ1 = () => {
    setQues1(!que1);
  };

  const handleForQ2 = () => {
    setQues2(!que2);
  };

  const handleForQ3 = () => {
    setQues3(!que3);
  };
  return (
    <>
      <div>
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-semibold mb-4">
            Frequently Asked Questions
          </h1>
        <div>
          <div>
            <h2>
            <button onClick={handleForQ1}>{que1 ? "-" : "+"}</button> What is Pakistan Bait Ul Maal?
            </h2>
            {que1 && <h1>PBHT XNA X AJX JX AJA AJ</h1>}
          </div>
          
          <div>
            <h2>
            <button onClick={handleForQ2}>{que2 ? "-" : "+"}</button> What is Pakistan Bait Ul Maal?
            </h2>
            {que2 && <h1>PBHT XNA X AJX JX AJA AJ</h1>}
          </div>
          
          <div>
            <h2>
            <button onClick={handleForQ3}>{que2 ? "-" : "+"}</button> What is Pakistan Bait Ul Maal?
            </h2>
            {que3 && <h1>PBHT XNA X AJX JX AJA AJ</h1>}
          </div>
        </div>
        </div>
      </div>
      </>
    
  );
}