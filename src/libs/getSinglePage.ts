import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const getSinglePage = (filePath) => {
    const readFileContents = fs.readFileSync(
        path.join(process.cwd(), filePath),
        'utf8'
    );
    const { data: frontMatter, content } = matter(readFileContents);

    return {
        frontMatter,
        content,
    };
};
