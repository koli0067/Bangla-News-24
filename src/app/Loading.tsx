const Loading = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
      {/* DaisyUI Loading Spinner */}
      <span className="loading loading-spinner loading-lg text-primary"></span>
      
      {/* সুদৃশ্য টেক্সট ও অ্যানিমেশন */}
      <p className="text-base-content/70 text-sm font-medium animate-pulse">
        লোডিং হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
      </p>
    </div>
  )
}

export default Loading 