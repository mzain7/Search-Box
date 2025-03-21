import Tag from "./Tag";

function TagList({ tags, activeTag, onTagClick }) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
                <Tag
                    key={tag}
                    label={tag}
                    isActive={tag === activeTag}
                    onClick={() => onTagClick(tag)}
                />
            ))}
        </div>
    );
};

export default TagList;
