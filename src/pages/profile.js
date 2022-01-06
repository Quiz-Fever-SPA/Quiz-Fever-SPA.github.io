import { findUser } from '../api/user.js';
import { html, until } from '../library.js';
import { cube } from './common/loader.js';

const profileTemplate = (user, quiz) => html`
<section id="profile">
    <header class="pad-large">
        <h1>Profile Page</h1>
    </header>

    <div class="hero pad-large">
        <article class="glass pad-large profile">
            <h2>Profile Details</h2>
            <p>
                <span class="profile-info">Username:</span>
                ${user.username}
            </p>
            <p>
                <span class="profile-info">Email:</span>
                ${user.email}
            </p>
            <!-- <h2>Your Quiz Results</h2>
            <table class="quiz-results">
                <tbody>
                    <tr class="results-row">
                        <td class="cell-1">23. March 2021</td>
                        <td class="cell-2"><a href="#">RISC Architecture</a></td>
                        <td class="cell-3 s-correct">85%</td>
                        <td class="cell-4 s-correct">12/15 correct answers</td>
                    </tr>
                </tbody>
            </table> -->
        </article>
    </div>

    <header class="pad-large">
        <h2>Quizes created by you:</h2>
    </header>

    <div class="pad-large alt-page">
    </div>
</section>`;

// <!-- ${until(quizTemplate(quiz), cube())} -->



const quizTemplate = (quiz) => html`
<article class="preview layout">
    <div class="right-col">
        <a class="action cta" href="/details/${quiz.objectId}">View Quiz</a>
        <a class="action cta" href="/edit/${quiz.objectId}"><i class="fas fa-edit"></i></a>
        <a class="action cta" href="#"><i class="fas fa-trash-alt"></i></a>
    </div>
    <div class="left-col">
        <h3><a class="quiz-title-link" href="#">RISC Architecture</a></h3>
        <span class="quiz-topic">Topic: Hardware</span>
        <div class="quiz-meta">
            <span>10 questions</span>
            <span>|</span>
            <span>Taken 107 times</span>
        </div>
    </div>
</article>`;

export async function profilePage(ctx) {
    const user = await findUser();
    ctx.render(profileTemplate(user));
}