
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'> Tailwind test</h1>

      

<div
  data-dialog-backdrop="modal"
  data-dialog-backdrop-close="true"
  class="inset-0 z-[999] grid h-screen w- screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
>
  <div
    data-dialog="modal"
    class="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
  >
    <div class="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
      Its a simple Modal
    </div>
    <div class="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
      The key to more success is to have a lot of pillows. Put it this
      way, it took me twenty five years to get these plants, twenty five
      years of blood sweat and tears, and I&apos;m never giving up,
      I&apos;m just getting started. I&apos;m up to something. Fan luv.
    </div>
    <div class="flex shrink-0 flex-wrap items-center pt-4 justify-end">
      <button data-dialog-close="true" class="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        Cancel
      </button>
      <button data-dialog-close="true" class="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
        Confirm
      </button>
    </div>
  </div>
</div>

<div class="text-center mt-4">
<button 
  data-dialog-target="modal"
  class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
  Open Modal
</button>
</div>


<br />

<div class="px-6">
<h2 class="text-sm font-semibold mb-2">Next script must be included:</h2>
<pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-scroll">
<code>https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js</code>
</pre>
</div>
    </>
  )
}

export default App
