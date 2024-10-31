export default function HighlightPoem() {
  // Poem carrousel
  return (
    <div className="carrousel">
        <div className="carrousel-item">
          <div className="cover-image">
            <img src="https://via.placeholder.com/150" alt="cover" />
          </div>
            <div className="poem">  
                <h2>Title of a Longer Featured Blog post</h2>
                <p>
                    Multiple lines of text that form the lede, informing new readers quickly
                    and efficiently about what’s most interesting in this post’s contents.
                </p>
                <p className="poem-button">Continue reading...</p>
            </div>
        </div>
    </div>
  );
}
