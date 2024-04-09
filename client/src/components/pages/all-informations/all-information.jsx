


const AllInformation = () => {

return (
  <div className="grid grid-cols-4 gap-10">
    <div className="card col-span-4 h-40 flex items-center justify-between gap-4">
      {cards.map(item => (
        <div className="bg-white h-full w-[335px] rounded-lg p-4">
          <div className="flex items-center justify-between mb-16">
            <h1 className="text-2xl font-semibold text-slate-500">{item.title}</h1>
            {<item.icon className="text-3xl text-slate-500"/>}
          </div>
        </div>
      ))}
    </div>
  </div>
)

}