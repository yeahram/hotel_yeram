"use client";

const Search = () => {
  return (
    <div
      className="
        w-full
        py-2
        transition
        cursor-pointer
        md:w-auto
        "
    >
      <div
        className="
        flex
        flex-row
        items-center
        justify-between
        "
      >
        <div
          className="
            text-sm
            px-6
           hidden
           sm:block
            "
        >
          로그인
        </div>

        <div
          className="
            text-sm
            px-6
            border-x-[1px]
            flex-1
            text-center
            hidden
            sm:block
            "
        >
          회원가입
        </div>

        <div className="text-sm pl-6  pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div
            className="hidden sm:block text-sm pr-2
            "
          >
            예약확인
          </div>
          <div
            className="
          border-[1px]
          border-gray-600
          p-2
          "
          >
            Reservation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
