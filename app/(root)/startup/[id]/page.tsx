import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <>
      <h1 className="text-3xl">
        This is a startup number: stopped at 3:00:00 {id}
      </h1>
    </>
  );
};

export default Page;
{
}
