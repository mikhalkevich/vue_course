<template>
<footer class="uni" id="ft">
    <section>
        <form class="obr">
            <p>
                <label for="name">Как к Вам обращаться?</label><br>
                <input type="text" name="name" id="name" required>
            </p>
            <p>
                <label for="phone">По какому телефону Вам позвонить?</label><br>
                <input type="text" name="phone" id="phone" required>
            </p>
            <p><label for="kurs" class="kur">Какой курс выбираете?</label><br>
                <select name="kurs" id="kurs">
                    <option value="vibor">Выберите из списка</option>                    
                    <option value="html">Html И CSS.Верстка сайтов</option>
                    <option value="php">PHP</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="node">Node JS</option>
                    <option value="Laravel">Laravel</option>
                    <option value="vue">Vue JS</option>
                </select>
            </p>
            <p>Дополнительная информация<br>
                <textarea cols="40" rows="8"
                wrap="hard">Введите текст</textarea>
                </p>
        </form>
        <button type="submit">
            <strong>Отправить</strong>
        </button>

    </section>
</footer>
</template>