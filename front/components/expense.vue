<template>
    <div>
        <div class="expense-form">
            <label for="title">Title</label>
            <input v-model="title" type="text" required placeholder="Title"> <br>
            <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
                <div class="menubar">
                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bold() }"
                    @click.prevent="commands.bold"
                    >
                    bold
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.italic() }"
                    @click.prevent="commands.italic"
                    >
                    italic
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.strike() }"
                    @click.prevent="commands.strike"
                    >
                    strike
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.underline() }"
                    @click.prevent="commands.underline"
                    >
                    underline
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code() }"
                    @click.prevent="commands.code"
                    >
                    code
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.paragraph() }"
                    @click.prevent="commands.paragraph"
                    >
                    paragraph
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                    @click.prevent="commands.heading({ level: 1 })"
                    >
                    H1
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    @click.prevent="commands.heading({ level: 2 })"
                    >
                    H2
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    @click.prevent="commands.heading({ level: 3 })"
                    >
                    H3
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bullet_list() }"
                    @click.prevent="commands.bullet_list"
                    >
                    ul
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.ordered_list() }"
                    @click.prevent="commands.ordered_list"
                    >
                    ol
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.blockquote() }"
                    @click.prevent="commands.blockquote"
                    >
                    quote
                    </button>

                    <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code_block() }"
                    @click.prevent="commands.code_block"
                    >
                    code
                    </button>

                    <button
                    class="menubar__button"
                    @click.prevent="commands.horizontal_rule"
                    >
                    hr
                    </button>

                    <button
                    class="menubar__button"
                    @click.prevent="commands.undo"
                    >
                    undo
                    </button>

                    <button
                    class="menubar__button"
                    @click.prevent="commands.redo"
                    >
                    redo
                    </button>

                </div>
                </editor-menu-bar>
                <editor-content class="editor__content" :editor="editor" />
            <!-- <label for="content">Content</label>
            <textarea v-model="content" type="textarea" required placeholder="content"></textarea> <br> -->
            <label for="money">money</label>
            <input v-model="money" type="number" required> <br>
            <!-- <input v-model="tag" type="text" placeholder="#Travel" required> <br> -->
            <label for="color">color</label>
            <select v-model="color" required>
                <option value="#ff0000" style="color= #ff0000 ">Red</option>
                <option value="#ffaa00">Orange</option>
                <option value="#fff91c">Yellow</option>
                <option value="#008000">Green</option>
                <option value="#3257ff">Blue</option>
                <option value="#2700b6">Indigo</option>
                <option value="#a600bc">Puple</option>
                <option value="#ffffff" selected>White</option>
                <option value="#080000">Black</option>
                <option value="#ffa0c0">Pink</option>
            </select>
            <button type="submit" @click="onSubmitForm()">Submit</button>
        </div>
    </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap' // https://github.com/scrumpy/tiptap
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
    components: {
        EditorContent,
        EditorMenuBar,
    },
    data() {
        return {
            today: new Date(),
            title: '',
            content: '',
            money: 0,
            color: '',
            tag: '',
            editor: null,
        }
    },
    mounted() {
        this.editor = new Editor({
            extensions: [
                new Blockquote(),
                new CodeBlock(),
                new HardBreak(),
                new Heading({ levels: [1, 2, 3] }),
                new BulletList(),
                new OrderedList(),
                new ListItem(),
                new TodoItem(),
                new TodoList(),
                new Bold(),
                new Code(),
                new Italic(),
                new Link(),
                new Strike(),
                new Underline(),
                new History(),
            ],
            content: '<p>Write your message on here</p>',
        })
    },
    beforeDestroy() {
        //this.editor.destory()
    },
    methods: {
        onSubmitForm() {
            const { year, month, day } = this.$route.params;

            this.$store.dispatch('expenses/createExpense', {
                title: this.title,
                content: this.editor.view.dom.innerHTML,
                color: this.color,
                money: this.money,
                year: year,
                month: month,
                day: day,
                //tag  태그 수정시
            })
            .then(() => {
                alert('Scucess to add Expense');
            }).catch((err) => {
                console.error(error);
                alert('There is some problem to add');
            });
        }
    },
}
</script>

<style lang="scss" scoped>
    .expense-form {
        font-family: 'Quicksand', sans-serif;
        padding: 10px;
        input {
            font-size: 20px;
            width: 98%;
            height: 30px;
        }

        select {
            width: 100%;
            margin: 0px 0px 10px 0px;
        }

        button[type=submit] {
            background-image: linear-gradient(120deg, #3498db, #8e448e);
            color: white;
            border: none;
            outline: none;
            cursor: pointer;
            text-align: center;
            width: 100%;
            height: 40px;
        }
        .editor__content {
            font-size: 20px;
            width: 98%;
            border: 2px solid black;
            height: 300px;
            margin: 10px 0px 10px 0px;
        }

        .menubar__button {
            padding: 3px;
            border: none;
            outline: none;
            cursor: pointer;
            text-align: center;
            width: 20%;
            margin: 5px;
            height: 20px;
        }
    }

</style>