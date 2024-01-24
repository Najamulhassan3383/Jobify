import InputField from "@/components/InputField";

function AddJob() {
  return (
    <div className="flex flex-col justify-center  w-10/12 m-auto mt-16">
      <h1 className="text-4xl font-bold text-white text-left w-full">
        Add Job
      </h1>
      <form className="grid grid-cols-1 grid-rows-2 gap-x-10 gap-y-3 h-1/5 w-full md:grid-cols-2 lg:grid-cols-3 ">
        <InputField className="col-span-1 row-span-1" placeholder="Input 1" />
        <InputField
          className="col-span-1 row-span-1"
          placeholder="InputField 2"
        />
        <InputField
          className="col-span-1 row-span-1"
          placeholder="InputField 3"
        />
        <InputField
          className="col-span-1 row-span-1 mt-4"
          placeholder="InputField 4"
        />
        <InputField
          className="col-span-1 row-span-1"
          placeholder="InputField 5"
        />
        <InputField className="col-span-1 row-span-1" placeholder="Input 6" />
      </form>
    </div>
  );
}

export default AddJob;
