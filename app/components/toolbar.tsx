import { useProductCategories } from '@/services/product.services';
import { Dispatch, SetStateAction } from 'react';

type ToolbarProps = {
  setSortCategory: Dispatch<
    SetStateAction<'ascending' | 'descending' | 'default'>
  >;
  setSearch: Dispatch<SetStateAction<string>>;
  setCateogry: Dispatch<SetStateAction<string>>;
};

export default function Toolbar({
  setSearch,
  setCateogry,
  setSortCategory,
}: ToolbarProps) {
  const { data: categories } = useProductCategories();

  return (
    <div className="flex flex-col md:flex-row bg-base-300 p-4 gap-4 wrap items-center w-full">
      <div className="sort-section flex gap-2">
        <select
          className="p-2 rounded-md w-full outline-none"
          placeholder="Select Category"
          onChange={e =>
            setSortCategory(
              e.target.value as 'ascending' | 'descending' | 'default',
            )
          }
        >
          <option value="default">Relevance</option>
          <option value="ascending">Price low to high</option>
          <option value="descending">Price high to low</option>
        </select>
      </div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search products..."
          onChange={e => setSearch(e.target.value)}
          className="p-2 rounded-md w-full outline-none"
        />
      </div>
      <div className="category-section flex gap-2">
        <select
          onChange={e => setCateogry(e.target.value)}
          className="p-2 rounded-md w-full outline-none"
          placeholder="Select Category"
        >
          <option value="all">All</option>
          {categories &&
            categories.map((category: string) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
