import React, { useEffect, useRef, useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom'
import { articleService } from '../../../_services/article.service';

const Articles = () => {
    const [Articles, setArticles] = useState([])
    const flag = useRef(false)

    // Récupération de la liste des utilisateurs à l'affichage
    useEffect(() => {
        if(flag.current === false){
            articleService.getAllArticles()
                .then(res => {
                    // Liste dans le state
                    setArticles(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        
    }, [])

    // Gestion du bouton de suppression d'un utilisateur
    const delArticle = (ArticleId) => {
        articleService.deleteArticle(ArticleId)
            .then(res => {
                // Mise à jour du state pour affichage
                setArticles((current) => current.filter(Article => Article.id !== ArticleId))
            })
            .catch(err => console.log(err))
    }

    return (        
        <div>
            <div className="container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>id</th>
                        <th>title</th>
                        <th>Image</th>
                        <th>Tattooshop_id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Articles.map((Article) => (
                            <tr key={Article.id}>
                                <td>{Article.article_id}</td>
                                <td>{Article.title}</td>
                                <td>{Article.img}</td>
                                <td>{Article.tattooshop_id}</td>
                                <td>
                                    <span className="m-1">
                                    <Button
                                            variant="primary">
                                            <Link className="text-light text-decoration-none"to={`/mon-compte/articles/edit/${Article.article_id}`}>Edit</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                        <Button
                                            variant="danger"
                                            onClick={() => delArticle(Article.article_id)}
                                        >
                                            Supprimer
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                    <Button
                                            variant="success">
                                            <Link className="text-light text-decoration-none"to={`/article/${Article.article_id}`}>Voir</Link>
                                        </Button>
                                    </span>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            </div>
        </div>
    );
};

export default Articles;