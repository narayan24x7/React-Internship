import { useState, useCallback, useEffect } from 'react';

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  let generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numsAllowed) {
      str += "0123456789"; 
    }
    if (charAllowed) str += "`~!@#$%^&*()_+<>?:{}/.,;[]";

    console.log(numsAllowed);
    console.log(charAllowed);

    for (let i = 1; i <= length; i++) {
      let randomChar = Math.floor(Math.random() * str.length); 
      pass += str.charAt(randomChar);
    }
    setPassword(pass);
  }, [length, numsAllowed, charAllowed, setPassword]);

  //   const copyToClipboard = () => {
  //   navigator.clipboard.writeText(password)
  //     .then(() => {
  //       alert("Password copied to clipboard!");
  //     })
  //     .catch((err) => {
  //       alert("Failed to copy password: " + err);
  //     });
  // };

  useEffect(() => {
    generatePassword();
  }, [length, numsAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className='bg-gray-500 text-white rounded-lg p-4 text-center'>
        <h1 className='text-2xl'>Password Generator</h1>
        <div className='flex mt-4'>
          <input type='text' className='border-2 border-indio-600 text-white' value={password}
            placeholder='Password'
            readOnly />
          <button className='bg-orange-500 text-white p-2'>Copy</button>
        </div>
        <div className='flex gap-4 mt-4'>
          <input type='range' min={8} max={20} onChange={(e) => setLength(e.target.value)} />   
          <label>Length {length}</label>
          <input type='checkbox' onChange={() => setNumsAllowed((prev) => !prev)} /> 
          <label>Number</label>
          <input type='checkbox' onChange={() => setCharAllowed((prev) => !prev)} /> 
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
