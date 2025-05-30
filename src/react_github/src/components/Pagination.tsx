interface Props {
    page: number;
    hasNext: boolean;
    onPrev: () => void;
    onNext: () => void;
}

const Pagination = ({ page, hasNext, onPrev, onNext }: Props) => (
    <div className="flex justify-between mt-6">
        <button
            disabled={page === 1}
            onClick={onPrev}
            className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
        >
            Prev
        </button>
        <button
            disabled={!hasNext}
            onClick={onNext}
            className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
        >
            Next
        </button>
    </div>
);

export default Pagination;
