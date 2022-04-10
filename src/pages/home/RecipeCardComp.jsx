import { useNavigate } from 'react-router-dom';
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyles'


const RecipeCardComp = ({ recipe1 }) => {
    
    let navigate = useNavigate();

    const moreClick = () => {
        navigate("/details", {state: { recipe1}})
    }

  return (
    <RecipeCard>
        <RecipeHeader>{recipe1.label}</RecipeHeader>
        <RecipeImage src={recipe1?.image} alt="" />
        <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  )
}

export default RecipeCardComp